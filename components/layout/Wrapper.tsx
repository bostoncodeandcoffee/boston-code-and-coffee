
export default function Wrapper({children, title, description}: any) {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}