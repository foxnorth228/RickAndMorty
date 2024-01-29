const getProcessedData = (data: unknown) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return ['', null, 'null', undefined, 'undefined'].includes(data) ? 'unknown' : data;
};

export default getProcessedData;
