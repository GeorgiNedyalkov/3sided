"use client"

import { useActionState } from "react"
import type { State } from "@/lib/actions";
import { submitContactData } from "@/lib/actions";

export default function ContactForm() {
	const initialState: State = {
		message: null,
		errors: {},
	}

	const [state, formAction, isPending] = useActionState(submitContactData, initialState);

	return (
		<form action={formAction} className="max-w-xl">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-4 md:mb-8 md:flex-row md:gap-8">
					<div className="flex w-full flex-col">
						<label htmlFor="firstName"></label>
						<input
							id="firstName"
							name="firstName"
							type="text"
							placeholder="First Name"
							className="border-b-2 border-b-black focus:outline-none py-2"
							required
							aria-describedby="first-name-error"
						/>
						<div id="first-name-error" aria-live="polite" aria-atomic="true">
							{
								state.errors?.firstName &&
								state.errors.firstName.map((error) => (
									<p key={error} className="text-red-500">
										{error}
									</p>
								))
							}
						</div>
					</div>
					<div className="flex w-full flex-col">
						<label htmlFor="lastName"></label>
						<input
							id="lastName"
							name="lastName"
							type="text"
							placeholder="Last Name"
							className="border-b-2 border-b-black focus:outline-none py-2"
						/>
					</div>
				</div>
				<div className="mb-8 flex flex-col w-full">
					<label htmlFor="email"></label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						className="border-b-2 border-b-black focus:outline-none py-2"
						required
						aria-describedby="email-error"
					/>
					<div id="email-error" aria-live="polite" aria-atomic="true">
						{
							state.errors?.email &&
							state.errors.email.map((error) => (
								<p key={error} className="text-red-500">
									{error}
								</p>
							))
						}
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message"></label>
					<textarea
						id="message"
						name="message"
						placeholder="Please write us a short message about your inquiry..."
						className="border-b-2 border-b-black p-2"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full rounded-md bg-primary p-3 uppercase transition-all duration-300 hover:bg-red-900 text-white"
					disabled={isPending}
				>
					{isPending ? "Sending..." : "Send"}
				</button>
			</div>
			<p className="text-red-500">
				{state.message && <p>{state.message}</p>}
			</p>
		</form >
	);
}
