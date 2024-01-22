import Navbar from "./Navbar"
import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Well that's not it...</h1>
      </main>
    </>)}
