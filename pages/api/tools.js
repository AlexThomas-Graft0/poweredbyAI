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
      description: "",
    },
    {
      id: 2,
      name: "Cast",
      image:
        "https://analyticsdrift.com/wp-content/uploads/2020/11/CAST-AI.png",
      url: "/cast",
      free: true,
      price: "$200.00",
      company: { name: "Tabnine", url: "https://cast.ai/" },
      description: "",
    },
    {
      id: 3,
      name: "run:ai",
      image: "https://www.run.ai/wp-content/uploads/2020/05/Runailabs.jpg",
      url: "/runai",
      free: false,
      price: "???",
      company: { name: "run:ai", url: "https://www.run.ai/" },
      description: "",
    },
    {
      id: 4,
      name: "fast.ai",
      image:
        "https://secure.meetupstatic.com/photos/event/a/5/2/3/600_480282275.jpeg",
      url: "/fastai",
      free: true,
      price: "Free",
      company: { name: "fast.ai", url: "https://www.fast.ai/" },
      description: "",
    },
    {
      id: 5,
      name: "Otter",
      image:
        "https://mms.businesswire.com/media/20210519005267/en/879530/5/Otter_logo.jpg",
      url: "/otter",
      free: true,
      price: "Free",
      company: { name: "otter", url: "https://otter.ai/" },
      description: "",
    },
    {
      id: 6,
      name: "Replika",
      image: "https://i.ytimg.com/vi/3WMB11CRsX8/hqdefault.jpg",
      url: "/replika",
      free: true,
      price: "in app purchases",
      company: { name: "replika", url: "https://replika.ai/" },
      description: "",
    },
    {
      id: 7,
      name: "Builder",
      image:
        "https://mma.prnewswire.com/media/1439888/Builder_ai_Logo.jpg?p=Facebook",
      url: "/builder",
      free: false,
      price: "???",
      company: { name: "builder", url: "https://www.builder.ai/" },
      description: "",
    },
    {
      id: 8,
      name: "Lustre",
      image: "https://lustre.ai/images/lustre-share-logo.png",
      url: "/lustre",
      free: false,
      price: "???",
      company: { name: "lustre", url: "https://lustre.ai/" },
      description: "",
    },
  ];

  const { page, limit } = req.query;
  const dataPage = getData({ data }, { page, limit });

  res.json(dataPage);
};
