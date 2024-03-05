import Form from "./components/Form.tsx";
import { FormProvider } from "./context/FormContext.tsx";

function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}

export default App;
