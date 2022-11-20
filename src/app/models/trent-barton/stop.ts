export interface Stop {
  stopName: string,
  result: [
    {
      serviceName: string,
      dueIn: string
    },
  ];
}
