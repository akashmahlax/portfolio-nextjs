"use client"

import { useRouter } from "next/navigation"
import { useTranslation } from "next-i18next"

export default function LanguageSwitcher() {
  const router = useRouter()
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    router.push(router.asPath, router.asPath, { locale: lng })
  }

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage("en")} className="text-love-600 dark:text-love-300 hover:underline">
        EN
      </button>
      <button onClick={() => changeLanguage("es")} className="text-love-600 dark:text-love-300 hover:underline">
        ES
      </button>
      <button onClick={() => changeLanguage("fr")} className="text-love-600 dark:text-love-300 hover:underline">
        FR
      </button>
    </div>
  )
}

