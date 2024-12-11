actor {
  public func getBalance(userId: Text): async Nat {
    return switch (userId) {
      case "user1" { 100_000 };
      case _ { 0 };
    };
  };
}
