import {container} from "./styles.css.ts";

interface TestComponentProps {
  children: React.ReactNode

}

const TestComponent = ({children}: TestComponentProps) => {

  return (
    <div className={container}>
      Test Component
      {children}
    </div>
  );
};

export default TestComponent;