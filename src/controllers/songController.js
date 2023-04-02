import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  const songs = await Song.find({}).sort({views:1}).collation({locale:"en_US", numericOrdering:true});
  return res.render("home", { pageTitle: "Home" ,songs});
};
 