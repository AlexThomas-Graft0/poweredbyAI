export default function Card({ name, image, url, free, price, company }) {
  console.log({ url });
  return (
    <div className="flex flex-col justify-between border border-indigo-100 rounded-lg shadow-lg">
      <a href={url} className="block bg-white rounded-lg shadow-sm h-1/4">
        <img
          src={image || "aiteam.svg"}
          alt="ai"
          className="object-cover w-full border border-indigo-300 rounded min-h-40 max-h-40"
        />
      </a>
      <div className="flex items-center justify-between p-2 mt-3">
        <div>
          <a href={url} className="font-medium">
            {name}
          </a>
          <a className="flex items-center" href={company.url}>
            <span className="text-xs font-medium text-gray-600">by</span>
            <span className="ml-1 text-xs font-medium text-indigo-500">
              {company.name}
            </span>
          </a>
        </div>
        <div className="flex flex-col items-end justify-end">
          <span className="flex items-center h-8 px-2 text-sm text-indigo-600 bg-indigo-200 rounded">
            {price}
          </span>
          {free && <span className="text-xs">*Free version available</span>}
        </div>
      </div>
    </div>
  );
}
