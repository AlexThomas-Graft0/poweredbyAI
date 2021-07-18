export default function Hero({
  image = "image",
  title = "Build Faster",
  subTitle = "Use AI Powered tools to save time Every. Single. Day.",
  description = "Here is a curated list of tools to help you in your daily work.",
  cta,
}) {
  return (
    <>
      <div className="flex flex-col items-center text-center sm:w-2/5 sm:items-start sm:text-left">
        <h1 className="mb-2 text-6xl font-bold leading-none tracking-wide text-blue-900 uppercase">
          {title}
        </h1>
        <h2 className="mb-6 text-2xl tracking-widest text-indigo-500 uppercase text-secondary">
          {subTitle}
        </h2>
        <p className="mb-12 leading-relaxed text-gray-600">{description}</p>
        {cta &&
          (cta || (
            <a
              href="/Tools"
              className="px-6 py-3 text-lg font-bold text-white uppercase bg-indigo-300 rounded-full hover:bg-indigo-400"
            >
              Tools
            </a>
          ))}
      </div>
      <div className="">
        {/* <div className="w-screen h-screen mt-8 mb-16 sm:mb-0 sm:mt-0 sm:w-3/5 sm:pl-12"> */}
        <img src={`/${image}.svg`} alt="image" width="100%" height="100%" />
      </div>
    </>
  );
}
