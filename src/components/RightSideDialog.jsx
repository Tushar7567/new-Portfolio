import { motion as Motion } from "framer-motion";
import useLockBodyScroll from "../hooks/useLockbodyScroll";

const RightSideDialog = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  useLockBodyScroll();
  return (
    <div className="fixed inset-0 z-50 flex justify-end w-full h-full backdrop-blur-sm">
      <Motion.div
        className="relative w-full max-w-2xl h-full overflow-y-auto scrollbar-thin shadow-xl bg-gradient-to-l from-midnight to-navy border-l border-white/10"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full rounded-b-none"
        />

        {/* Content */}
        <div className="p-6 mt-2">
          <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
          <p className="mb-3 text-neutral-300">{description}</p>
          {subDescription.map((sub, idx) => (
            <p key={idx} className="mb-3 text-sm text-neutral-400">
              {sub}
            </p>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                className="w-10 h-10 rounded-lg hover:scale-105 transition"
              />
            ))}
          </div>

          {/* CTA Link */}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-6 font-medium text-white hover:text-blue-400 transition"
            >
              View Project
              <img src="assets/arrow-up.svg" alt="Arrow" className="w-4 h-4" />
            </a>
          )}
        </div>
      </Motion.div>
    </div>
  );
};

export default RightSideDialog;
