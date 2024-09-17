use ic_cdk::println;

// Query function to greet and ask for feedback
#[ic_cdk::query]
fn greet(name: String, experience: String) -> String {
    // Greet the user
    let greeting = format!("Hello, {}!", name);

    // Process user's experience input
    let feedback = match experience.to_lowercase().as_str() {
        "good" => "I'm glad you had a good experience!",
        "bad" => "Sorry to hear that! We appreciate your feedback.",
        _ => "Please choose either 'good' or 'bad' as your feedback.",
    };

    // Discord tag for suggestions
    let discord_tag = "Feel free to suggest new changes via my Discord: 353376114170789888";

    // Combine the output
    format!("{}\n{}\n{}", greeting, feedback, discord_tag)
}
