{
  //
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    // tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      // this.client.tryConnect();
      // login...
    }
  }

  // const client = new NetworkClient();
  // const service = new UserService(client);
  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 의미 있는 처리를 할 수 있는 곳에 try catch
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        // try catch 에러는 any 타입
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
