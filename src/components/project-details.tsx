"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Star, Copy, FolderTree, FileText } from "lucide-react";
import { CartType, ProjectType } from "@/types/project";
import AddToCartButton from "@/components/AddToCartButton";

export function ProjectDetails({ project }: { project: ProjectType }) {
    const cartItem: CartType = {
        id: project?.id,
        title: project?.title,
        image: project?.image,
        price: project?.price,
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-2">
                    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-lg sm:mb-8 md:h-96">
                        <Image
                            src={`${project.image}`}
                            alt={`${project.title}`}
                            height={1920}
                            width={1080}
                            className="max-w-full object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
                            <h1 className="mb-2 text-xl font-bold text-white sm:text-3xl md:text-4xl">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-2">
                                {project.categories.map((category, index) => (
                                    <Badge key={index} variant={"secondary"}>
                                        {category}
                                    </Badge>
                                ))}
                                {project.languages.map((language, index) => (
                                    <Badge key={index} variant={"secondary"}>
                                        {language}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 sm:hidden">
                        <h1 className="mb-2 truncate text-2xl font-bold">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-2">
                            {project.categories.map((category, index) => (
                                <Badge
                                    key={index}
                                    className="px-2"
                                    variant={"secondary"}
                                >
                                    {category}
                                </Badge>
                            ))}
                            {project.languages.map((language, index) => (
                                <Badge
                                    className="px-2"
                                    key={index}
                                    variant={"secondary"}
                                >
                                    {language}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <p className="mb-6 line-clamp-5 text-sm text-muted-foreground sm:text-base">
                        {project.content}
                    </p>
                    <Tabs defaultValue="preview" className="mb-4 w-full">
                        <TabsList className="h-fit flex-wrap gap-2">
                            <TabsTrigger
                                className="flex-1 gap-1.5 outline outline-2 outline-background"
                                value="preview"
                            >
                                <Code className="h-4 w-4" />
                                Code Preview
                            </TabsTrigger>
                            <TabsTrigger
                                className="flex-1 gap-1.5 outline outline-2 outline-background"
                                value="requirements"
                            >
                                <FileText className="h-4 w-4" />
                                Requirements
                            </TabsTrigger>
                            <TabsTrigger
                                className="flex-1 gap-1.5 outline outline-2 outline-background"
                                value="structure"
                            >
                                <FolderTree className="h-4 w-4" />
                                Project Structure
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="preview">
                            <div className="rounded-md bg-secondary outline outline-1 outline-secondary">
                                <div className="flex justify-between px-4 py-2 text-foreground">
                                    <p>main.py</p>
                                    <div className="flex items-center gap-2">
                                        <Copy className="h-3.5 w-3.5" />
                                        <p className="text-sm">Copy code</p>
                                    </div>
                                </div>
                                <div>
                                    <pre className="overflow-x-scroll whitespace-pre-wrap text-nowrap rounded-bl-md rounded-br-md bg-black/90 p-4 text-sm text-white">
                                        <code className="language-python">{`import numpy as np
import matplotlib.pyplot as plt
from neural_network import NeuralNetwork

def main():
    # Create a neural network with 3 layers
    nn = NeuralNetwork([2, 3, 1])
    
    # Generate some sample data
    X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
    y = np.array([[0], [1], [1], [0]])
    
    # Train the network
    nn.train(X, y, epochs=1000)
    
    # Visualize the network
    nn.visualize()
    
    plt.show()

if __name__ == "__main__":
    main()
`}</code>
                                    </pre>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="requirements">
                            <Card>
                                <CardHeader>
                                    <CardDescription>
                                        Libraries and dependencies needed for
                                        this project
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-4">
                                        <li>Python 3.7+</li>
                                        <li>NumPy</li>
                                        <li>Matplotlib</li>
                                        <li>NetworkX</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="structure">
                            <Card>
                                <CardHeader>
                                    <CardDescription>
                                        File and directory layout of the project
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <pre className="rounded-md bg-black/90 p-4 text-white">
                                        <code>{`neural_network_visualizer/
├── main.py
├── neural_network.py
├── visualizer.py
├── requirements.txt
└── README.md`}</code>
                                    </pre>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="lg:row-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        Language:
                                    </span>
                                    <span>Python</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        Difficulty:
                                    </span>
                                    <span>Intermediate</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        Last Updated:
                                    </span>
                                    <span>2023-06-15</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        Version:
                                    </span>
                                    <span>1.2.0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        License:
                                    </span>
                                    <span>MIT</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        Price:
                                    </span>
                                    {project.price && (
                                        <span className="text-lg font-bold text-green-600">
                                            ₹{(project.price / 100).toFixed(2)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <AddToCartButton project={cartItem} />
                            <Button variant="outline" className="w-full">
                                <Star className="mr-2 h-4 w-4" /> Star Project
                            </Button>
                            <Button variant="secondary" className="w-full">
                                <Code className="mr-2 h-4 w-4" /> View
                                Documentation
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
