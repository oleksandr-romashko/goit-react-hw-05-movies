import css from "./Loader.module.css";

/**
 * Animated loader component.
 * @returns {JSX.Element} Rendered loader component.
 */
const Loader = () => {
  return (
    <div className={css.loader}>
      <SpoolIconSvg className={css["loader-icon"]}  />
    </div>
  )
};

/**
 * Svg icon component
 * @param {*} props Any props for svg element.
 * @returns {JSX.Element} Rendered svg icon component.
 */
const SpoolIconSvg = (props) => (
  <svg 
  viewBox="0 0 65 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="icon">
      <path
        id="outer-circle"
        d="M22 42C33.046 42 42 33.046 42 22C42 10.954 33.046 2 22 2C10.954 2 2 10.954 2 22C2 33.046 10.954 42 22 42Z"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 22 22"
          to="-90 22 22"
          dur="0.5s"
          repeatCount="indefinite" />
        <path
          id="inner-circles"
          d="M22 16C22.7956 16 23.5587 15.6839 24.1213 15.1213C24.6839 14.5587 25 13.7956 25 13C25 12.2044 24.6839 11.4413 24.1213 10.8787C23.5587 10.3161 22.7956 10 22 10C21.2044 10 20.4413 10.3161 19.8787 10.8787C19.3161 11.4413 19 12.2044 19 13C19 13.7956 19.3161 14.5587 19.8787 15.1213C20.4413 15.6839 21.2044 16 22 16ZM22 34C22.7956 34 23.5587 33.6839 24.1213 33.1213C24.6839 32.5587 25 31.7956 25 31C25 30.2044 24.6839 29.4413 24.1213 28.8787C23.5587 28.3161 22.7956 28 22 28C21.2044 28 20.4413 28.3161 19.8787 28.8787C19.3161 29.4413 19 30.2044 19 31C19 31.7956 19.3161 32.5587 19.8787 33.1213C20.4413 33.6839 21.2044 34 22 34ZM13 25C13.7956 25 14.5587 24.6839 15.1213 24.1213C15.6839 23.5587 16 22.7956 16 22C16 21.2044 15.6839 20.4413 15.1213 19.8787C14.5587 19.3161 13.7956 19 13 19C12.2044 19 11.4413 19.3161 10.8787 19.8787C10.3161 20.4413 10 21.2044 10 22C10 22.7956 10.3161 23.5587 10.8787 24.1213C11.4413 24.6839 12.2044 25 13 25ZM31 25C31.7956 25 32.5587 24.6839 33.1213 24.1213C33.6839 23.5587 34 22.7956 34 22C34 21.2044 33.6839 20.4413 33.1213 19.8787C32.5587 19.3161 31.7956 19 31 19C30.2044 19 29.4413 19.3161 28.8787 19.8787C28.3161 20.4413 28 21.2044 28 22C28 22.7956 28.3161 23.5587 28.8787 24.1213C29.4413 24.6839 30.2044 25 31 25Z"
          
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </g>
      <g>
        <path
          id="tail"
          d="M11.5 39C11.5 39 14.8008 41.3287 19.5 42C26.1038 42.9434 28.703 41.5 35 41.5C41.297 41.5 44.203 44.5 50.5 44.5C56.797 44.5 55.7338 40.6221 62 40"
          strokeWidth={4}
          strokeLinecap="butt"
          strokeDasharray="4 1.1"
        >
          <animate 
            attributeType="XML" 
            attributeName="stroke-dasharray" 
            dur=".4s" 
            values="4 1.1;
                    7 1.1" 
            keyTimes="0;1" 
            repeatCount="indefinite">
          </animate>
        </path>
      </g>
    </g>
</svg>
)

export default Loader;

