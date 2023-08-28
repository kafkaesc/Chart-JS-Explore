export default function H2({ children, className }) {
	return className ? (
		<h2 className={`text-xl font-bold text-center ${className}`}>{children}</h2>
	) : (
		<h2 className="text-xl font-bold text-center">{children}</h2>
	);
}
