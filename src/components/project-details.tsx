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
import { Code, Download, Star, ShoppingCart } from "lucide-react";
import { CartType, ProjectType } from "@/types/project";
import AddToCartButton from "@/components/AddToCartButton";

export function ProjectDetails({ project }: { project: ProjectType }) {
    const cartItem: CartType = {
        id: project?.id!,
        title: project?.title!,
        image: project?.image!,
        price: project?.price!,
    };

    return (
        project && (
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <div className="relative mb-8 h-64 overflow-hidden rounded-lg md:h-96">
                            <Image
                                src={`${project.image}`}
                                alt={`${project.title}`}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                                    {project.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-2">
                                    {project.categories.map((item, index) => (
                                        <Badge
                                            key={index}
                                            variant={"secondary"}
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                    {project.languages.map((item, index) => (
                                        <Badge
                                            key={index}
                                            variant={"secondary"}
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="mb-6 line-clamp-5 text-muted-foreground">
                            {project.content}
                        </p>
                        <Tabs defaultValue="preview" className="w-full">
                            <TabsList>
                                <TabsTrigger value="preview">
                                    Code Preview
                                </TabsTrigger>
                                <TabsTrigger value="requirements">
                                    Requirements
                                </TabsTrigger>
                                <TabsTrigger value="structure">
                                    Project Structure
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="preview">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>main.py</CardTitle>
                                        <CardDescription>
                                            Main entry point of the application
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <pre className="overflow-x-auto rounded-md bg-muted p-4">
                                            <code className="overflow-x-scroll">{`import numpy as np
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
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="requirements">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Requirements</CardTitle>
                                        <CardDescription>
                                            Libraries and dependencies needed
                                            for this project
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
                                        <CardTitle>Project Structure</CardTitle>
                                        <CardDescription>
                                            File and directory layout of the
                                            project
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <pre className="rounded-md bg-muted p-4">
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
                                                ₹
                                                {(project.price / 100).toFixed(
                                                    2,
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-4">
                                <AddToCartButton project={cartItem} />
                                <Button variant="outline" className="w-full">
                                    <Star className="mr-2 h-4 w-4" /> Star
                                    Project
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
        )
    );
}
