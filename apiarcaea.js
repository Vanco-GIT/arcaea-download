// 保存为 api/arcaea.js
export default async (req, res) => {
  const up = await fetch('https://webapi.lowiro.com/webapi/serve/static/bin/arcaea/apk');
  const body = await up.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(body);
};
