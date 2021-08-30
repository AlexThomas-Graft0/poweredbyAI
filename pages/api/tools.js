// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import json from from consts/tools.json
// import json from '../../../consts/tools.json';

import { supabase } from "../../lib/initSupabase";

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

export default async (req, res) => {
  const { page, limit } = req.query;
  const { data, error } = await supabase.from("tools").select();

  const dataPage = getData({ data }, { page, limit });

  res.json(dataPage);
};
