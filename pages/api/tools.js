// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const paginateArray = (array, page, limit) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return array.slice(start, end);
};

const paginateData = (data, page, limit) => {
  const start = (page - 1) * +limit;
  const end = start + +limit;
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
      url: "tabnine",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "$12.00",
      paymentFrequency: "monthly",
      company: { name: "Tabnine", url: "https://www.tabnine.com/install" },
      description: "",
      parent: "",
      tags: ["coding", "GPT-2"],
    },
    {
      id: 2,
      name: "Copilot",
      image:
        "https://bit.ly/3iBVvtV" ||
        "https://bit.ly/3Bp2iQf" ||
        "https://github.githubassets.com/images/icons/copilot/cp-head-square.png",
      url: "copilot",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: { name: "Copilot", url: "https://copilot.github.com/" },
      description: "",
      parent: "",
      tags: ["coding", "GPT-2"],
    },
    {
      id: 3,
      name: "Cast",
      image:
        "https://analyticsdrift.com/wp-content/uploads/2020/11/CAST-AI.png",
      url: "cast",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "$200.00",
      paymentFrequency: "",
      company: { name: "Cast", url: "https://cast.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 4,
      name: "run:ai",
      image: "https://www.run.ai/wp-content/uploads/2020/05/Runailabs.jpg",
      url: "runai",
      free: false,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: { name: "run:ai", url: "https://www.run.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 5,
      name: "fast.ai",
      image:
        "https://secure.meetupstatic.com/photos/event/a/5/2/3/600_480282275.jpeg",
      url: "fastai",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "Free",
      paymentFrequency: "",
      company: { name: "fast.ai", url: "https://www.fast.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 6,
      name: "Otter",
      image:
        "https://mms.businesswire.com/media/20210519005267/en/879530/5/Otter_logo.jpg",
      url: "otter",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "Free",
      paymentFrequency: "",
      company: { name: "otter", url: "https://otter.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 7,
      name: "Replika",
      image: "https://i.ytimg.com/vi/3WMB11CRsX8/hqdefault.jpg",
      url: "replika",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "in app purchases",
      paymentFrequency: "",
      company: { name: "replika", url: "https://replika.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 8,
      name: "Builder",
      image:
        "https://mma.prnewswire.com/media/1439888/Builder_ai_Logo.jpg?p=Facebook",
      url: "builder",
      free: false,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: { name: "builder", url: "https://www.builder.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 9,
      name: "Lustre",
      image: "https://lustre.ai/images/lustre-share-logo.png",
      url: "lustre",
      free: false,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: { name: "lustre", url: "https://lustre.ai/" },
      description: "",
      parent: "",
      tags: [],
    },
    {
      id: 10,
      name: "respondable",
      image: "https://bit.ly/2TpYJrM",
      url: "respondable",
      free: true,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "$4.99-$49.99",
      paymentFrequency: "",
      company: {
        name: "Boomerang",
        parent: "",
        url: "https://www.boomeranggmail.com/respondable",
      },
      description: "",
      tags: ["email"],
    },
    {
      id: 11,
      name: "notionAi",
      image: "",
      url: "notionai",
      free: false,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "$4.99-$49.99",
      paymentFrequency: "",
      company: {
        name: "notionAi",
        parent: "",
        url: "https://notion.ai/",
      },
      description: "",
      tags: ["email"],
    },
    {
      id: 12,
      name: "Stash",
      image: "https://bit.ly/3xYJ1mt",
      url: "stash",
      free: false,
      freeTrial: true,
      trialLength: true,
      prices: [],
      price: "$36",
      paymentFrequency: "Annually",
      company: {
        name: "Stash",
        parent: "",
        url: "https://stash.ai/",
      },
      description: "",
      tags: ["browser", "bookmarks"],
    },
    {
      id: 13,
      name: "Outwrite",
      formerName: "GradeProof",
      image: "https://assets.outwrite.com/images/outwrite_open_graph.png",
      url: "outwrite",
      free: true,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: {
        name: "Outwrite",
        parent: "",
        url: "https://www.outwrite.com/",
      },
      description: "",
      tags: ["writing"],
    },
    {
      id: 14,
      name: "amper",
      image: "https://i.ytimg.com/vi/M-5J5Nv0AC4/maxresdefault.jpg",
      url: "amper",
      free: false,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: {
        name: "amper",
        parent: "Shutterstock",
        url: "https://www.ampermusic.com/",
      },
      description: "",
      tags: ["music"],
    },
    {
      id: 15,
      name: "Transformer",
      image: "https://huggingface.co/front/thumbnails/v2-2.png",
      url: "transformer",
      free: true,
      freeTrial: false,
      trialLength: "",
      prices: [],
      price: "???",
      paymentFrequency: "",
      company: {
        name: "huggingface",
        parent: "",
        url: "https://transformer.huggingface.co/",
      },
      description: "",
      tags: ["writing"],
    },
    {
      id: 16,
      name: "removal.ai",
      image:
        "https://cdn.knoji.com/images/logo/removalai.jpg?aspect=center&snap=false&width=1000&height=500",
      url: "removal",
      free: true,
      freeTrial: true,
      trialLength: "1 credit/50 previews",
      prices: ["$0.07/image", "$0.48/image"],
      price: "???",
      paymentFrequency: "",
      company: {
        name: "removalai",
        parent: "",
        url: "https://removal.ai/",
      },
      description: "",
      tags: ["images"],
    },
    {
      id: 17,
      name: "ContentBot.ai",
      image: "https://contentbot.ai/assets/img/twitter-card-new-3.png",
      url: "contentbot",
      free: true,
      freeTrial: true,
      trialLength: "1 credit/50 previews",
      prices: ["$29", "$79"],
      price: "???",
      paymentFrequency: "monthly",
      company: {
        name: "removalai",
        parent: "",
        url: "https://contentbot.ai/",
      },
      description: "",
      tags: ["content", "writing"],
    },
  ];

  const { page, limit } = req.query;
  const dataPage = getData({ data }, { page, limit });

  res.json(dataPage);
};
