<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{
		return [
			'role' => 'required|string|min:2|max:3',
			'firstname' => 'required|string|max:50',
			'lastname' => 'required|string|max:50',
			'birth' => 'required|string|min:10|max:10',
			'email' => 'required|email|unique:users',
			'password' => [
				'required',
				'confirmed',
				Password::min(8)
					->letters()
					->symbols()
					->numbers()
			],
		];
	}
}
