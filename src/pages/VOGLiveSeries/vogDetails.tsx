import { useMemo } from "react";
import { IconButton, Skeleton } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Img, Text } from "components";
import Layout from "components/Layout/Layout";
import { useReactQuery } from "hooks/useReactQuery";
import { useNavigate, useParams } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.png";
import { getEmbededYTLink } from "utils";
import { queryClient } from "App";

interface tvShowProps {
  id: string;
  name: string;
  host: string;
  description: string;
  slug: string;
  airing_time: string;
  airing_date: string;
  logo: any;
  banner: any;
  created_at: Date;
  updated_at: Date;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TVShowDetailsPage: React.FC = () => {
  const { id: serviceID } = useParams();
  const navigate = useNavigate();

  // const {
  //   isLoading: isDetailsLoading,
  //   data,
  // }: { isLoading: boolean; data: any } = useReactQuery(
  //   ["tvServicesDetails", serviceID],
  //   `/live-services/${serviceID}`
  // );

  // const tvShowDetails = useMemo(() => {
  //   if (data && "show" in data) {
  //     return data.show;
  //   }
  //   return null;
  // }, [data]) as tvShowProps;

  const tvShowDetails = useMemo(() => {
    const liveServices: any = queryClient.getQueryData(["vogLiveServices"]);

    if (
      liveServices &&
      "services" in liveServices &&
      Array.isArray(liveServices.services)
    ) {
      console.log("serviceID:", serviceID);
      console.log("liveServices>>>>>>>:", liveServices?.services);

      const findService = liveServices?.services?.find(
        (service: any) => service.id === serviceID
      );
      console.log("findService:", findService);
      return findService;
    }

    return null;
  }, [queryClient]) as tvShowProps;

  const handleBack = () => {
    navigate("/vog-live-services");
  };

  console.log("tvShowDetails:", tvShowDetails);

  return (
    <Layout
      title={
        <div className="flex items-center gap-4">
          <IconButton onClick={handleBack}>
            <ArrowBackRoundedIcon />
          </IconButton>

          {tvShowDetails?.name}

          <Img
            className="rounded-[50%] h-[50px] md:h-[50px] w-[50px] md:w-[50px] md:mx-auto"
            src={tvShowDetails?.logo?.img_url}
            placeholder={placeholder}
            alt="showDetails"
          />
        </div>
      }
    >
      <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col items-center justify-end p-5 rounded-[10px] w-full">
          <div className="flex md:flex-col flex-row mx-auto border-b border-gray-900_19 relative w-full pb-5 mb-5 min-h-[450px]">
            <div className="flex flex-col items-start justify-end gap-5 w-4/5 md:w-full h-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtPlusJakartaSansRomanSemiBold22"
                >
                  Host
                </Text>

                <Text
                  className="leading-[30.00px] max-w-[613px] md:max-w-full text-gray-900 text-lg"
                  size="txtPlusJakartaSansRomanRegular18Gray900"
                >
                  {tvShowDetails?.host ? (
                    tvShowDetails?.host
                  ) : (
                    <>
                      <Skeleton
                        animation="wave"
                        variant="text"
                        width={210}
                        sx={{ fontSize: "1rem" }}
                      />
                    </>
                  )}
                </Text>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtPlusJakartaSansRomanSemiBold22"
                >
                  About Service
                </Text>

                <Text
                  className="leading-[30.00px] max-w-[613px] md:max-w-full text-gray-900 text-lg"
                  size="txtPlusJakartaSansRomanRegular18Gray900"
                >
                  {tvShowDetails?.description ? (
                    tvShowDetails?.description
                  ) : (
                    <>
                      <Skeleton animation="wave" width={400} height={40} />
                      <Skeleton animation="wave" width={400} height={40} />
                      <Skeleton animation="wave" width={300} height={40} />
                    </>
                  )}
                </Text>
              </div>
            </div>

            {tvShowDetails?.banner?.img_url ? (
              <Img
                className="absolute md:relative inset-y-[0] mt-0 right-[0] rounded-[50%] h-[400px] md:h-[300px] w-[400px] md:w-[300px] md:mx-auto"
                src={tvShowDetails?.banner?.img_url}
                placeholder={placeholder}
                alt="showDetails"
              />
            ) : (
              <Skeleton
                variant="circular"
                animation="wave"
                width={500}
                height={400}
              />
            )}
          </div>

          <div className="h-[400px] mt-5 relative w-full md:bg-black-900">
            <iframe
              id="pageHeader"
              className="w-full h-full rounded-lg bg-black-900"
              src={getEmbededYTLink(tvShowDetails?.video_url)}
              title={tvShowDetails?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TVShowDetailsPage;
