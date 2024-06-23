import React, { useEffect, useState } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const ScatterPlotGraphComponent: React.FC<Props> = ({
  data,
}) => {
  const [dateFormat, setDateFormat] = useState<string>('%b %d %Y');
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const screenSize = () => {
    setScreenWidth(window?.innerWidth);
  };

  useEffect(() => {
    if (screenSize) {
      window?.addEventListener("resize", screenSize);
    }
    return () => window.removeEventListener("resize", screenSize);
  }, []);

  useEffect(() => {
    if (screenWidth <= 700) {
      setDateFormat('%b %d');
    }
    if (screenWidth >= 700) {
      setDateFormat('%b %d %Y');
    }
  }, [screenWidth, dateFormat]);

  return (
    <>
      <ResponsiveScatterPlot
        data={data}
        theme={{
          axis: {
            legend: {
              text: {
                fontSize: 20,
                fontWeight: 700,
                fill: "#072535",
              },
            },
            ticks: {
              text: {
                fill: "rgba(7,37,53,0.7)",
                fontSize: 14,
              },
            },
          },
        }}
        margin={{ 
          top: 5, 
          right: 25,
          bottom: 75, 
          left: 50,
        }}
        xScale={{ type: "time", format: "%m/%d/%Y" }}
        xFormat="time:%m/%d/%Y"
        yScale={{ type: 'linear', min: -10, max: 50 }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "% Premium",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        axisBottom={{
          format: dateFormat,
          legend: "Closed Dates",
          legendOffset: 50,
          legendPosition: 'middle',
        }}
        colors={['#0a2535']}
        nodeSize={9}
      />
    </>
  );
};

export type Props = {
  data: any;
};

export default ScatterPlotGraphComponent;
