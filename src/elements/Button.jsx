export default function Button({ children, className, ...props }) {
	return className ? (
		<button {...props} className={`px-2 px-4 border ${className}`}>
			{children}
		</button>
	) : (
		<button {...props} className="px-2 px-4 border">
			{children}
		</button>
	);
}
