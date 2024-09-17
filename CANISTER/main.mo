import Principal "mo:base/Principal";

actor SmartContract {
    type User = {
        name: Text;
        address: Text;
        balance: Nat;
    };

    var users : [Principal -> User] = {};

    public func registerUser(name: Text, address: Text) : async Bool {
        let caller = msg.caller;
        if (users.containsKey(caller)) {
            return false;
        } else {
            users.put(caller, {
                name = name;
                address = address;
                balance = 0;
            });
            return true;
        };
    };

    public func getUser() : async ?User {
        let caller = msg.caller;
        return users.get(caller);
    };

};
