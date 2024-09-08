"use client";
import { usePathname } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

export const ProjectSkeleton = () => {
    const pathname = usePathname();
    return (
        <div className="rounded-lg max-w-sm sm:max-w-xs">
            <div className="aspect-[16/10] w-full rounded-lg">
                <Skeleton className="aspect-[16/10] w-full min-h-[160px] max-h-[200px] sm:h-[200px] sm:max-h-[200px] rounded-lg" />
            </div>

            <div className="p-4">
                <div className="mt-2">
                    <Skeleton className="w-full h-6" />
                </div>
                <div className="flex justify-between items-center mt-4">
                    {pathname == "profile" ||
                    pathname == "profile#my-projects" ? (
                        <Skeleton className="w-full h-8" />
                    ) : (
                        <>
                            <Skeleton className="w-1/3 h-6" />
                            <Skeleton className="w-20 h-8" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

