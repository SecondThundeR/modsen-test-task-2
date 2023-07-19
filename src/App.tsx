import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { LocatingStatusContext } from "@/contexts/LocatingStatusContext";
import { router } from "@/routes";
import { store } from "@/store";

function App() {
  const [isLocating, setIsLocating] = useState(false);

  return (
    <Provider store={store}>
      <LocatingStatusContext.Provider value={{ isLocating, setIsLocating }}>
        <RouterProvider router={router} />
      </LocatingStatusContext.Provider>
    </Provider>
  );
}

export default App;
