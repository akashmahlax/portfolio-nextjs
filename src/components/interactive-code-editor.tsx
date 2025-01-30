"use client"

import React, { useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { useTranslation } from "next-i18next"

const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false })

const initialCode = `
function greet(name) {
  return \`Hello, \${name}! Welcome to my portfolio.\`;
}

console.log(greet('Visitor'));
`

export default function InteractiveCodeEditor() {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const { t } = useTranslation("common")

  const handleCodeChange = (newCode: string) => {
    setCode(newCode)
  }

  const handleRunCode = () => {
    try {
      // Create a new Function from the code string and execute it
      const result = new Function(code)()
      setOutput(result)
    } catch (error) {
      setOutput(`Error: ${error.message}`)
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("codeEditor.title")}</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
        >
          <MonacoEditor
            width="100%"
            height="300"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={handleCodeChange}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handleRunCode}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              {t("codeEditor.runButton")}
            </button>
            <div className="text-sm">
              <span className="font-semibold">{t("codeEditor.output")}:</span> {output}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

