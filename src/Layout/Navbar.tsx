import { navbar_items } from "@/types/common_types";
import { useRouter } from "next/router";
import { Home, Category, Book1, Shop } from "iconsax-react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/setup/hooks";
import { handleTheWebMode } from "@/redux/slicers/setting";
export const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const navbarItems: navbar_items = [
    {
      title: "خانه ",
      icon: <Home size="20" className="text-primary" />,
      value: "/",
    },
    {
      title: "دسته بندی ها ",
      icon: <Category size="20" className="text-primary" />,
      value: "",
    },
    {
      title: "محصولات ",
      icon: <Shop size="20" className="text-primary" />,
      value: "/products",
    },
    {
      title: "بلاگ",
      icon: <Book1 size="20" className="text-primary" />,
      value: "/blog",
    },
    {
      title: "ارتباط با ما",
      icon: <Home size="20" className="text-primary" />,
      value: "/contact",
    },
  ];

  return (
    <div className="navbar bg-base-500 w-full">
      <div className="flex items-center gap-2 w-full justify-start">
        {navbarItems?.map((item, key) => (
          <Link
            key={key}
            href={item?.value}
            className={`btn ${item?.value === router.pathname} btn-md `}
          >
            {item?.icon}
            {item?.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-1 w-full justify-end">
        <button
          className="btn  btn-sm text-white"
          onClick={() => {
            dispatch(handleTheWebMode("dark"));
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};
