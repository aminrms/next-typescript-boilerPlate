import { useAppDispatch, useAppSelector } from "@/redux/setup/hooks";
import Skeleton from "react-loading-skeleton";
const SkeletonLoading = () => {
  const dispatch = useAppDispatch();
  const count_skeleton = Array.from({ length: 10 });
  return (
    <div className="flex items-center justify-center flex-col ">
      {count_skeleton?.map((item, index) => (
        <Skeleton
          enableAnimation={true}
          height={"20"}
          width={"100%"}
          containerClassName="rounded-lg"
        />
      ))}
    </div>
  );
};

export default SkeletonLoading;
