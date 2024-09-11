import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full shrink-0 items-center border-t px-4 py-6 md:px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-4 font-bold">About Us</h3>
                        <p className="text-sm text-gray-500">
                            We provide high-quality computer science project
                            source code to help developers and students enhance
                            their skills and portfolios.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-sm hover:underline"
                                    href="#"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm hover:underline"
                                    href="#"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm hover:underline"
                                    href="#"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm hover:underline"
                                    href="#"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-bold">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">
                                Email: info@csprojectstore.com
                            </li>
                            <li className="text-sm">Phone: (123) 456-7890</li>
                            <li className="text-sm">
                                Address: 123 Tech Street, Codeville, CV 12345
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-bold">Newsletter</h3>
                        <form className="flex space-x-2">
                            <Input
                                className="max-w-lg flex-1"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        © 2023 CS Project Store. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
