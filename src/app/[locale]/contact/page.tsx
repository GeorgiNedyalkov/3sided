import ContactForm from "@/components/contact/contact-async";

export default function ContactPage() {
	return (
		<div className="mt-20 h-screen flex flex-col items-center justify-start gap-4">
			<h1 className="text-4xl font-semibold text-primary">Contact us</h1>
			<p>Please dont hesitate to contact us today.</p>
			<ContactForm />
		</div>
	);
}
