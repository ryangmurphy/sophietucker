export function Hero() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <div className="relative">
        <div className="absolute -left-12 -top-12">
          <Star className="h-8 w-8 text-white" />
        </div>
        <h1 className="mb-4 text-7xl font-bold tracking-tight text-emerald-950">
          Hi. I&apos;m Sophie.
          <br />A Marketing Coordinator.
        </h1>
        <div className="absolute -bottom-12 -right-12">
          <Star className="h-8 w-8 text-white" />
        </div>
      </div>
      <p className="mt-8 max-w-md text-lg text-emerald-800">
        I&apos;m passionate about crafting experiences that are engaging,
        accessible, and user-centric.
      </p>
    </div>
  );
}

function Star(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

