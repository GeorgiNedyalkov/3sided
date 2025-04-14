import clsx from "clsx";

export default function ToggleGold({
  isGold,
  toggleIsGold,
}: {
  isGold: boolean;
  toggleIsGold: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={clsx({
          "font-bold": isGold,
        })}
      >
        Gold
      </span>
      <button
        onClick={toggleIsGold}
        className={clsx(
          "flex h-6 w-16 items-center rounded-xl bg-slate-300 transition-all duration-300",
          {
            "bg-yellow-300": isGold,
          }
        )}
      >
        <div
          className={clsx("m-2 h-4 w-4 rounded-full bg-black transition-all duration-300", {
            "translate-x-8 bg-slate-700": !isGold,
            "bg-yellow-700": isGold,
          })}
        />
      </button>
      <span
        className={clsx({
          "font-bold": !isGold,
        })}
      >
        Silver
      </span>
    </div>
  );
}
