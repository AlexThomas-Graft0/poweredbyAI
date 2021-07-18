// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const paginateData = (data, page, limit) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  const results = {
    data: data.slice(start, end),
    total: data.length,
    page,
    limit,
  };

  return results;
};

const getData = (state, params) => {
  const { page, limit } = params;
  const { data } = state;
  return paginateData(data, page, limit);
};

export default (req, res) => {
  const data = [
    {
      id: 1,
      name: "Tabnine",
      image: "https://www.tabnine.com/images/meta.png",
      url: "/tabnine",
      free: true,
      price: "$12.00",
      paymentFrequency: "monthly",
      company: { name: "Tabnine", url: "https://www.tabnine.com/install" },
    },
    {
      id: 2,
      name: "Tabnine",
      image: "https://www.tabnine.com/images/meta.png",
      url: "/tabnine",
      free: true,
      price: "Free",
      company: { name: "Tabnine", url: "https://tabnine.com" },
    },
    {
      id: 3,
      name: "Tabnine",
      image: "https://www.tabnine.com/images/meta.png",
      url: "/tabnine",
      free: true,
      price: "Free",
      company: { name: "Tabnine", url: "https://tabnine.com" },
    },
    {
      id: 4,
      name: "Tabnine",
      image: "https://www.tabnine.com/images/meta.png",
      url: "/tabnine",
      free: true,
      price: "Free",
      company: { name: "Tabnine", url: "https://tabnine.com" },
    },
  ];

  const { page, limit } = req.query;
  const dataPage = getData({ data }, { page, limit });

  res.json(dataPage);
};
