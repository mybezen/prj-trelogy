const FormSection = () => {
  return (
    <div className="absolute left-0 right-0 z-10 flex justify-center bottom-10">
      <form className="p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value="Central Java, Indonesia"
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="from"
              className="block text-sm font-medium text-gray-700"
            >
              From
            </label>
            <input
              type="date"
              id="from"
              name="from"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="month"
              className="block text-sm font-medium text-gray-700"
            >
              Month
            </label>
            <input
              type="month"
              id="month"
              name="month"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-red-500 rounded-md"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default FormSection;
