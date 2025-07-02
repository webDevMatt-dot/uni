import { Spinner } from "src/components/ui/loading";

export function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="relative px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md w-full flex justify-center items-center"
    >
      {loading ? <Spinner /> : "Send Message"}
    </button>
  );
}
