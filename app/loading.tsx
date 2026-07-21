export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-white dark:bg-[#071225]">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-mist border-t-cyan" aria-label="Loading" />
    </div>
  );
}
