import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
import Loader from "./Loader";
import PropTypes from "prop-types";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string,
        channelId: PropTypes.string,
      }),
    })
  ),
  direction: PropTypes.oneOf(["row", "column"]),
};

export default Videos;
