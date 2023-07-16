import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { YMaps } from "@pbe/react-yandex-maps";

import { router } from "@/routes";
import { store } from "@/store";

function App() {
  return (
    <Provider store={store}>
      <YMaps>
        <RouterProvider router={router} />
      </YMaps>
    </Provider>
  );
}

export default App;
