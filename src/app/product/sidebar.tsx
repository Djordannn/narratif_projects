import Link from "../../../node_modules/next/link";

const Sidebar = () => {
  return (
    <div className="w-[20%] hidden md:block">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/product/t_shirt">T-Shirt</Link>
        </li>
        <li>
          <Link href="/product/jersey">jersey</Link>
        </li>
        <li>
          <Link href="/product/vintage">vintage</Link>
        </li>
        <li>
          <Link href="#">school sport</Link>
        </li>
        <li>
          <Link href="#">varsity jacket</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
