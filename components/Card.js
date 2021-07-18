export default function Card({ name, image, url, free, price, company }) {
  return (
    <div className="border border-indigo-100 rounded-lg shadow-lg">
      <a href="#" className="block bg-white rounded-lg shadow-sm h-100">
        <img src={image || "aiteam.svg"} alt="ai" />
      </a>
      <div className="flex items-center justify-between p-1 mt-3">
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
        <span className="flex items-center h-8 px-2 text-sm text-indigo-600 bg-indigo-200 rounded">
          {price}
        </span>
        {free && <span>Free version available</span>}
      </div>
    </div>
  );
}
