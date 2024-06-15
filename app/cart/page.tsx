"use client"

import { JSX, SVGProps, useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const cartItems = [
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 2,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Autumn Leaves Wall Art",
      price: 39.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ]
  const [cart, setCart] = useState(cartItems)
  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }
  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = 10
  const total = subtotal - discount
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg"
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button size="lg" className="w-full mt-6">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}