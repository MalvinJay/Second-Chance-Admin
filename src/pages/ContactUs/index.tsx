import { Autocomplete, Box, TextField } from "@mui/material";
import { Button, Img, Input, SelectBox, Text } from "components";
import Layout from "components/Layout/Layout";

const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

import { countries } from "../../contants";

const ContactUsPage: React.FC = () => {
  return (
    <Layout title="Contact Us">
      <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtPlusJakartaSansRomanSemiBold22Gray900"
          >
            Your information
          </Text>
          <div className="flex flex-col items-center justify-start">
            <Button
              className="cursor-pointer font-semibold min-w-[128px] text-center text-sm"
              color="deep_purple_A200_19"
            >
              Update Info
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start mt-[47px] w-[85%] md:w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-1/2 sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Email
            </Text>
            <Input
              name="frame1091"
              placeholder="Enter your email here"
              className="md:h-auto p-0 placeholder:text-blue_gray-900_99 sm:h-auto text-left text-sm w-full"
              wrapClassName="border border-gray-900_26 border-solid w-full"
              type="email"
              size="sm"
            ></Input>
          </div>

          <div className="flex flex-col gap-4 items-start justify-start w-1/2 sm:w-full">
            <Text
              className="text-blue_gray-900 text-xl w-auto"
              size="txtPlusJakartaSansRomanSemiBold20"
            >
              Contact Number
            </Text>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: 150 }}
              options={countries}
              className="!w-full"
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="bg-white-A700 border border-gray-900_26 border-solid flex flex-row gap-6 items-center justify-start p-4 rounded-md w-full"
                  label="country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start mt-6 w-[85%] md:w-full">
          <Text
            className="text-blue_gray-900 text-xl w-auto"
            size="txtPlusJakartaSansRomanSemiBold20"
          >
            Location
          </Text>
          <Input
            name="frame1091_One"
            placeholder="Enter your location here"
            className="p-0 placeholder:text-blue_gray-900_99 text-left text-sm w-full"
            wrapClassName="border border-gray-900_26 border-solid flex md:h-auto max-w-[1004px] w-full"
            suffix={
              <Img
                className="h-6 ml-3"
                src="images/img_settings_gray_900.svg"
                alt="settings"
              />
            }
            size="sm"
          ></Input>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
