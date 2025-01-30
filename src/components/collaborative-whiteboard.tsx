"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import io from "socket.io-client"

export default function CollaborativeWhiteboard() {
  const canvasRef = useRef(null)
  const [socket, setSocket] = useState(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const newSocket = io("http://localhost:3001")
    setSocket(newSocket)

    return () => newSocket.close()
  }, [])

  useEffect(() => {
    if (!socket) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    socket.on("draw", (data) => {
      drawLine(context, data.x0, data.y0, data.x1, data.y1, data.color)
    })

    return () => {
      socket.off("draw")
    }
  }, [socket])

  const startDrawing = (e) => {
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const draw = (e) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    socket.emit("draw", {
      x0: x,
      y0: y,
      x1: x,
      y1: y,
      color: "black",
    })
  }

  const drawLine = (context, x0, y0, x1, y1, color) => {
    context.beginPath()
    context.moveTo(x0, y0)
    context.lineTo(x1, y1)
    context.strokeStyle = color
    context.lineWidth = 2
    context.stroke()
    context.closePath()
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Collaborative Whiteboard</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={draw}
            className="w-full border border-gray-300 dark:border-gray-600"
          />
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
            Draw something on the whiteboard and see it update in real-time for all connected users!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

