import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";

const tabs = [
  {
    name: "Tab1",
    content: <Section1 />,
  },
  {
    name: "Tab2",
    content: <Section2 />,
  },
  {
    name: "Tab3",
    content: <Section3 />,
  },
];

const Login = () => {
  const idHook = useInput("");
  const passwordHook = useInput("");
  const { item, setItem } = useTabs(0, tabs);
  return (
    <>
      <form>
        <input type="text" {...idHook} />
        <input type="password" {...passwordHook} />
      </form>
      <div>
        {tabs.map((tab, i) => (
          <button onClick={() => setItem(i)}>{tab.name}</button>
        ))}
        {item}
      </div>
    </>
  );
};

export default Login;
