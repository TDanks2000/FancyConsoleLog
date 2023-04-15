import dayjs from "dayjs";

const formatDate = (date: Date) => {
  return dayjs(date).format("HH:mm:ss");
};

export { formatDate };
