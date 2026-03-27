export type ActivityStatus = "draft" | "published" | "archived";

export type Activity = {
  id: string;
  title: string;
  location: string;
  date: string;
  price: number;
  status: ActivityStatus;
};
