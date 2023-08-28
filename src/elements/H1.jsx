export default function H1({ children, className }) {
	return className ? (
		<h1 className={`text-3xl font-bold text-center ${className}`}>
			{children}
		</h1>
	) : (
		<h1 className="text-3xl font-bold text-center">{children}</h1>
	);
}
