import Link from "next/link";

export default function Home() {
  const Home_Menus = [
    { label: "Pay" },
    { label: "Save" },
    { label: "Borrow" },
    { label: "Invest" },
  ];
  return (
    <>
      <nav>
        <ul>
          {Home_Menus.map((menu, index) => (
            <li key={index}>{menu.label}</li>
          ))}
        </ul>
      </nav>
      <div className="container mx-auto mt-3 px-4"></div>
    </>
  );
}
